import { fireEvent, render, screen } from "@testing-library/react";
import ModalCreateUser from "./create-user";
import { Provider } from "react-redux";
import store from "src/lib/redux/store";

it("should not render when props open is false", () => {
  render(
    <Provider store={store}>
      <ModalCreateUser
        open={false}
        handleClose={() => {}}
        handleCreate={() => {}}
      />
    </Provider>
  );

  const modal = screen.queryByText("Form Create User");

  expect(modal).toBeNull();
});

it("should render when props open is true", () => {
  render(
    <Provider store={store}>
      <ModalCreateUser
        open={true}
        handleClose={() => {}}
        handleCreate={() => {}}
      />
    </Provider>
  );

  const modal = screen.queryByText("Form Create User");

  expect(modal).not.toBeNull();
});

it("should render textfield", () => {
  render(
    <Provider store={store}>
      <ModalCreateUser
        open={true}
        handleClose={() => {}}
        handleCreate={() => {}}
      />
    </Provider>
  );

  const fullNameField = screen.getByPlaceholderText("Input Full Name");
  expect(fullNameField).toBeInTheDocument();

  const usernameField = screen.getByPlaceholderText("Input Username");
  expect(usernameField).toBeInTheDocument();

  const companyNameField = screen.getByPlaceholderText("Input Company Name");
  expect(companyNameField).toBeInTheDocument();

  const companyPhraseField = screen.getByPlaceholderText(
    "Input Phrase Company"
  );
  expect(companyPhraseField).toBeInTheDocument();
});

it("should fill the value right", () => {
  render(
    <Provider store={store}>
      <ModalCreateUser
        open={true}
        handleClose={() => {}}
        handleCreate={() => {}}
      />
    </Provider>
  );

  const fullNameField = screen.getByPlaceholderText("Input Full Name");

  fireEvent.change(fullNameField, { target: { value: "23" } });
  expect((fullNameField as HTMLInputElement).value).toBe("23");
});

it("should render button submit with text 'Simpan'", () => {
  render(
    <Provider store={store}>
      <ModalCreateUser
        open={true}
        handleClose={() => {}}
        handleCreate={() => {}}
      />
    </Provider>
  );

  const button = screen.getByText("Simpan");

  expect(button).toBeInTheDocument();
});

it("should run handleClose function after click button 'Batal'", async () => {
  const handleClose = jest.fn();

  render(
    <Provider store={store}>
      <ModalCreateUser
        open={true}
        handleClose={handleClose}
        handleCreate={() => {}}
      />
    </Provider>
  );

  const button = screen.getByText("Batal");

  fireEvent.click(button);

  expect(handleClose).toHaveBeenCalledTimes(1);
});
