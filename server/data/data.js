const allChats = [
  {
    isGroupChat: false,
    users: [
      {
        name: "John Doe",
        email: "john@example.com",
      },
      {
        name: "J-Bird",
        email: "J-Bird@example.com",
      },
    ],
    chatId: "617a077e18c25468bc7c4dd4",
    chatName: "John Doe",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Guest User",
        email: "guest@example.com",
      },
      {
        name: "J-Bird",
        email: "J-Bird@example.com",
      },
    ],
    chatId: "617a077e18c25468b27c4dd4",
    chatName: "Guest User",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Twat",
        email: "Twat@example.com",
      },
      {
        name: "J-Bird",
        email: "J-Bird@example.com",
      },
    ],
    chatId: "617a077e18c2d468bc7c4dd4",
    chatName: "Twat",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "John Doe",
        email: "jon@example.com",
      },
      {
        name: "J-Bird",
        email: "J-Bird@example.com",
      },
      {
        name: "Guest User",
        email: "guest@example.com",
      },
    ],
    chatId: "617a518c4081150716472c78",
    chatName: "Friends",
    groupAdmin: {
      name: "Guest User",
      email: "guest@example.com",
    },
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Jane Doe",
        email: "jane@example.com",
      },
      {
        name: "J-Bird",
        email: "J-Bird@example.com",
      },
    ],
    chatId: "617a077e18c25468bc7cfdd4",
    chatName: "Jane Doe",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "John Doe",
        email: "jon@example.com",
      },
      {
        name: "J-Bird",
        email: "J-Bird@example.com",
      },
      {
        name: "Guest User",
        email: "guest@example.com",
      },
    ],
    chatId: "617a518c4081150016472c78",
    chatName: "Chill Zone",
    groupAdmin: {
      name: "Guest User",
      email: "guest@example.com",
    },
  },
];

module.exports = allChats;
