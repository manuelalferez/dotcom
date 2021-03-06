/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

import {
  InnerRenderFunction,
  RenderContext,
  ServerContext,
} from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

import { config, setup } from "@twind";
import { virtualSheet } from "twind/sheets";
import { withLog } from "./utils/ga.ts";
import { serve } from "https://deno.land/std@0.128.0/http/server.ts";

const sheet = virtualSheet();
sheet.reset();
setup({ ...config, sheet });

function render(ctx: RenderContext, render: InnerRenderFunction) {
  const snapshot = ctx.state.get("twind") as unknown[] | null;
  sheet.reset(snapshot || undefined);
  render();
  ctx.styles.splice(0, ctx.styles.length, ...sheet.target);
  const newSnapshot = sheet.reset();
  ctx.state.set("twind", newSnapshot);
}

const ctx = await ServerContext.fromManifest(manifest, { render });

const innerHandler = withLog(ctx.handler());

if (Deno.env.get("ENVIRONMENT") != "development") {
  serve(innerHandler);
} else {
  serve(ctx.handler());
}
