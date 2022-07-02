---
title: "Understanding the REST architectural style"
publish_date: "2022-06-08"
---

## Introduction 

Before understanding concepts such as REST, RESTful and REST API, let's go to the description that O'reilly gives us:


Representational State Transfer (REST) is a technical description of how the World Wide Web works. Specifically, REST tells us how the Web achieves its great scale. If the Web can be said to have an “operating system,” its architectural style is REST. 

A REST Application Programming Interface (REST API) is a type of web server that enables a client, either user-operated or automated, to access resources that model a system’s data and functions. 

Having a REST API makes a web service “RESTful.” A REST API consists of an assembly of interlinked resources. This set of resources is known as the REST API’s resource model. [1]

![](https://ik.imagekit.io/manuelalferez/dotcom/understanding-the-rest-architectural-style/1ac702a5-b08d-483b-b982-25db5bf7e5be_Untitled-2022-01-30-1915.excalidraw_PHjIMrzJo.avif?ik-sdk-version=javascript-1.4.3&updatedAt=1656691038981)

## What are these principles or constraints of the RESTful architecture?

We now know that the REST architecture enumerates a set of constraints, in order to satisfy the scalability of the web. The constraints are: 

Client-server. The web is a client-server based system, where the client and the server will have different roles to play. By separating the user interface (client) from the data storage (server), we improve the portability of the user interface across multiple platforms while simplifying the server.

Uniform interface. Once a developer becomes familiar with one of your APIs, he should be able to follow a similar approach for other APIs. In other words, there should be a uniform way of interacting with a given server regardless of the device or type of application.

Layered system. Between the client who requests a representation of a resource’s state, and the server who sends the response back, there might be a number of servers in the middle. Those layers should not affect the request or the response. This allows you to use a layered system architecture where APIs are deployed on server A, data is stored on server B and requests are authenticated on server C, for example. A client cannot normally know whether it is connected directly to the end server or to an intermediary along the way, all thanks to this layered system.

Cache. Caching is one of the most important constraints because adding the ability to cache data for each response helps to reduce the latency perceived by the client, increase the overall availability and reliability of an application and control the load on a web server. In a word, caching reduces the overall cost of the Web.

Stateless. The stateless constraint dictates that a web server is not required to memorize the state of its client applications. As a result, each client must include all of the contextual information that it considers relevant in each interaction with the web server. 

Code-on-demand. This constraint is optional, an API can be RESTful even without providing code on demand. According to this, servers can also provide executable code to the client.   

## What's next?

What are the HTTP verbs?

How do we design the contract that the service will expose to its consumers?

Any improvements to the article are most welcome. In future articles I will be answering questions that have arisen to me and which, in order to keep the scope of each article strict and reduced, have not been answered in this article.

## References 

[1] - [REST API - Design Rulebook](https://github.com/indrabasak/Books/blob/master/REST%20API%20Design%20Rulebook.pdf)
[2] - [REST API Architectural Constraints](https://www.geeksforgeeks.org/rest-api-architectural-constraints/#:~:text=The%20only%20optional%20constraint%20of,API%20and%20Non%2DREST%20API.)
[3] - [What is REST — A Simple Explanation for Beginners, Part 2: REST Constraints](https://medium.com/extend/what-is-rest-a-simple-explanation-for-beginners-part-2-rest-constraints-129a4b69a582)
[4] - [CHAPTER 5 - Representational State Transfer (REST)](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm)