import reducer, {
  UserState,
  createUser,
  deleteUser,
  setDetailUser,
  setListUser,
  updateUser
} from "./userSlice";

test("should return the initial state", () => {
  expect(reducer(undefined, { type: "unknown" })).toEqual({
    list: [],
    detail: {
      id: 0,
      name: "",
      username: "",
      company: {
        name: "",
        catchPhrase: ""
      },
      avatar: ""
    },
    totalData: 0
  });
});

test("should handle a set data user to detail", () => {
  const previousState: UserState = {
    list: [],
    detail: {
      id: 0,
      name: "",
      username: "",
      company: {
        name: "",
        catchPhrase: ""
      },
      avatar: ""
    },
    totalData: 0
  };

  expect(
    reducer(
      previousState,
      setDetailUser({
        id: 1,
        name: "Ardiansyah Halim Putra",
        username: "puhdidi",
        company: {
          name: "Hyppe",
          catchPhrase: "Mantab"
        },
        avatar: "https://picsum.photos/id/11/200/200"
      })
    )
  ).toEqual({
    list: [],
    detail: {
      id: 1,
      name: "Ardiansyah Halim Putra",
      username: "puhdidi",
      company: {
        name: "Hyppe",
        catchPhrase: "Mantab"
      },
      avatar: "https://picsum.photos/id/11/200/200"
    },
    totalData: 0
  });
});

test("should handle a set data list user to an empty list", () => {
  const previousState: UserState = {
    list: [],
    detail: {
      id: 0,
      name: "",
      username: "",
      company: {
        name: "",
        catchPhrase: ""
      },
      avatar: ""
    },
    totalData: 0
  };

  expect(
    reducer(
      previousState,
      setListUser([
        {
          id: 1,
          name: "Ardiansyah Halim Putra",
          username: "puhdidi",
          company: {
            name: "Hyppe",
            catchPhrase: "Mantab"
          },
          avatar: "https://picsum.photos/id/11/200/200"
        }
      ])
    )
  ).toEqual({
    list: [
      {
        id: 1,
        name: "Ardiansyah Halim Putra",
        username: "puhdidi",
        company: {
          name: "Hyppe",
          catchPhrase: "Mantab"
        },
        avatar: "https://picsum.photos/id/11/200/200"
      }
    ],
    detail: {
      id: 0,
      name: "",
      username: "",
      company: {
        name: "",
        catchPhrase: ""
      },
      avatar: ""
    },
    totalData: 1
  });
});

test("should handle a user data being updated from the list", () => {
  const previousState: UserState = {
    list: [
      {
        id: 1,
        name: "Ardiansyah Halim Putra",
        username: "puhdidi",
        company: {
          name: "Hyppe",
          catchPhrase: "Mantab"
        },
        avatar: "https://picsum.photos/id/11/200/200"
      }
    ],
    detail: {
      id: 0,
      name: "",
      username: "",
      company: {
        name: "",
        catchPhrase: ""
      },
      avatar: ""
    },
    totalData: 1
  };

  expect(
    reducer(
      previousState,
      updateUser({
        id: 1,
        name: "Joko Parjojo",
        username: "joko",
        company: {
          name: "Kopsus",
          catchPhrase: "Hehe"
        },
        avatar: "https://picsum.photos/id/11/200/200"
      })
    )
  ).toEqual({
    list: [
      {
        id: 1,
        name: "Joko Parjojo",
        username: "joko",
        company: {
          name: "Kopsus",
          catchPhrase: "Hehe"
        },
        avatar: "https://picsum.photos/id/11/200/200"
      }
    ],
    detail: {
      id: 0,
      name: "",
      username: "",
      company: {
        name: "",
        catchPhrase: ""
      },
      avatar: ""
    },
    totalData: 1
  });
});

test("should handle a user data being deleted from the list", () => {
  const previousState: UserState = {
    list: [
      {
        id: 1,
        name: "Ardiansyah Halim Putra",
        username: "puhdidi",
        company: {
          name: "Hyppe",
          catchPhrase: "Mantab"
        },
        avatar: "https://picsum.photos/id/11/200/200"
      }
    ],
    detail: {
      id: 0,
      name: "",
      username: "",
      company: {
        name: "",
        catchPhrase: ""
      },
      avatar: ""
    },
    totalData: 1
  };

  expect(reducer(previousState, deleteUser(1))).toEqual({
    list: [],
    detail: {
      id: 0,
      name: "",
      username: "",
      company: {
        name: "",
        catchPhrase: ""
      },
      avatar: ""
    },
    totalData: 1
  });
});

test("should handle a user data being added from the existing list", () => {
  const previousState: UserState = {
    list: [
      {
        id: 1,
        name: "Ardiansyah Halim Putra",
        username: "puhdidi",
        company: {
          name: "Hyppe",
          catchPhrase: "Mantab"
        },
        avatar: "https://picsum.photos/id/11/200/200"
      }
    ],
    detail: {
      id: 0,
      name: "",
      username: "",
      company: {
        name: "",
        catchPhrase: ""
      },
      avatar: ""
    },
    totalData: 1
  };

  expect(
    reducer(
      previousState,
      createUser({
        id: 2,
        name: "Joko Parjojo",
        username: "joko",
        company: {
          name: "Kopsus",
          catchPhrase: "Hehe"
        },
        avatar: "https://picsum.photos/id/12/200/200"
      })
    )
  ).toEqual({
    list: [
      {
        id: 2,
        name: "Joko Parjojo",
        username: "joko",
        company: {
          name: "Kopsus",
          catchPhrase: "Hehe"
        },
        avatar: "https://picsum.photos/id/12/200/200"
      },
      {
        id: 1,
        name: "Ardiansyah Halim Putra",
        username: "puhdidi",
        company: {
          name: "Hyppe",
          catchPhrase: "Mantab"
        },
        avatar: "https://picsum.photos/id/11/200/200"
      }
    ],
    detail: {
      id: 0,
      name: "",
      username: "",
      company: {
        name: "",
        catchPhrase: ""
      },
      avatar: ""
    },
    totalData: 2
  });
});
