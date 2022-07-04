import { ConnInfo } from "https://deno.land/std@0.128.0/http/server.ts";

// Main function to handle all GA events.
import { createReporter } from "https://deno.land/x/g_a@0.1.2/mod.ts";

const ga = createReporter({ id: Deno.env.get("GA_TRACKING") });

export function withLog(
  handler: (
    request: Request,
    connInfo: ConnInfo
  ) => Response | Promise<Response>
): (request: Request, connInfo: ConnInfo) => Promise<Response> {
  return async (req, con) => {
    let err: unknown;
    let res!: Response;
    const start = performance.now();
    try {
      res = await handler(req, con);
    } catch (e) {
      err = e;
      console.error(err);
      res = new Response("500 Internal Server Error\nPlease try again later.", {
        status: 500,
      });
    } finally {
      ga(req, con, res, start, err);
    }
    return res;
  };
}
