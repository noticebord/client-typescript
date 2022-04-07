# client-typescript

The official Typescript client library for the Noticebord API.

# Installation

To install, run the following command:

NPM:


```bash
npm install noticebord-client
```

Yarn:

```bash
yarn add noticebord-client
```

CDN:

The package is also availavable from [JsDelivr](https://www.jsdelivr.com/package/npm/noticebord-client) and [Unpkg](https://unpkg.com/browse/noticebord-client/).

# Usage 

## NoticebordClient

This is the entry point to the SDK.

```ts
const client = new NoticebordClient();

// Providing a valid access token will allow you tyo perform action on behalf of users
const client = new NoticebordClient(token);

// You can also provide a custom base URL to connect to an instance of the web platform hosted elsewhere
const client = new NoticebordClient(token, baseUrl);
```

## Tokens

A token is needed to access restricted endpoints and perform actions on behalf of users.

```ts
// Use your request object to get a token from the server
const token = await NoticebordClient.getToken({
    email: "",
    password: "",
    deviceName: "",
});

// You can optionally provide a custom base url
const token = await NoticebordClient.getToken({
    email: "",
    password: "",
    deviceName: "",
}, baseUrl);
```

## Notices

This service allows you to perform operations related to notices.

```ts
// An instance of the notice service can be obtained from the Noticebord client.
const service = client.notices

// Creating a notice
const notice = await service.createNotice({
    title: "",
    body: "",
    topics: [],
    anonymous: false,
    public: true,
});

// Fetching notices
const notices = await service.fetchNotices();

// This endpoint is cursor-paginated, and you can optionally include a cursor to fetch results from a specific page.
const notices = await service.fetchNotices(cursor);

// Fetching a single notice
const notices = await service.fetchNotice(noticeId);

// Updating notices
const notice = await service.updateNotice({
    title: "",
    body: "",
    topics: [],
    anonymous: false,
    public: true,
});

// Deleting notices
await service.deleteNotice(noticeId);
```

## Team Notices

This service allows you to perform operations related to team notices.

```ts
// An instance of the team notice service can be obtained from the Noticebord client.
const service = client.teamNotices

// Creating a team notice
const teamNotice = await service.createTeamNotice(teamId, {
    title: "",
    body: "",
});

// Fetching team notices
const teamNotices = await service.fetchTeamNotices(teamId);

// This endpoint is cursor-paginated, and you can include a cursor, to fetch results from a specific page.
const teamNotices = await service.fetchTeamNotices(teamId, cursor);

// Fetching a single team notice
const teamNotice = await service.fetchTeamNotice(teamId, teamNoticeId);

// Updating team notices
const teamNotice = await service.updateTeamNotice(teamId, {
    title: "",
    body: "",
});


// Deleting team notices
await service.deleteTeamNotice(teamId, teamNoticeId);
```

## Topics

This service allows you to perform operations related to topics.

```ts
// An instance of the topic service can be obtained from the Noticebord client.
const service = client.topics

// Fetching topics
const topics = await service.fetchTopics();

// Fetching a single topic
const topic = await service.fetchTopic(topicId);

// Fetching topic notices
const topicNotices = await service.fetchTopicNotices(topicId);

// This endpoint is cursor-paginated, and you can include a cursor, to fetch results from a specific page.
const topicNotices = await service.fetchTopicNotices(topicId, cursor);
```

## Teams

This service allows you to perform operations related to teams.

```ts
// An instance of the team service can be obtained from the Noticebord client.
const service = client.teams

// Fetching teams
const teams = await service.fetchTeams();

// Fetching a single team
const team = await service.fetchTeam(teamId);
```

## Users

This service allows you to perform operations related to users.

```ts
// An instance of the user service can be obtained from the Noticebord client.
const service = client.users

// Fetching users
const users = await service.fetchUsers();

// Fetching a single user
const user = await service.fetchUser(userId);

// Fetching the current user
const currentUser = await service.fetchCurrentUser();

// Fetching user notices
const userNotices = await service.fetchUsersNotices(UserId);

// Fetching user notes (private notices)
const userNotes = await service.fetchUserNotes(userId);
```

# Building From Source

## 0. Prerequisites

- Git

## 1. Clone the repo from GitHub

```bash
git clone https://github.com/noticebord/client-typescript
```

## 2. Build the project

NPM
```bash
npm run build
```

Yarn
```bash
yarn build
```

## 3. Running Tests

NPM
```bash
npm run test
```

Yarn
```bash
yarn test
```

# Contributing

This project is governed by the [Noticebord contribution guidelines](#).
