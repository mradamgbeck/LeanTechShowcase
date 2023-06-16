import { cleanup, render, waitFor } from "@testing-library/react";
import DropDown from "./DropDown";
jest.mock("axios");
import axios from "axios";
import { BASE_URL } from "../../constants";
import { act } from "react-dom/test-utils";

let albumsUrl = `${BASE_URL}/albums`;
let album1 = {
  userId: 1,
  id: 123,
  title: "the cool album",
};
let album2 = {
  userId: 1,
  id: 234,
  title: "the cooler album",
};
let album3 = {
  userId: 1,
  id: 345,
  title: "the coolest album",
};

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe("DropDown", () => {
  it("gets the list of album data", async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve([album1, album2, album3])
    );
    await act(async () => {
      render(<DropDown callBack={() => {}} />);
    });
    expect(axios.get).toHaveBeenCalledWith(albumsUrl);
  });

  it("populates the select with album ids", async () => {
    axios.get.mockImplementation(() =>
      Promise.resolve([album1, album2, album3])
    );
    const { getByTestId } = render(<DropDown callBack={() => {}} />);
    waitFor(() => {
      let html = getByTestId("select");
      expect(html.children.length).toEqual(3);
    });
  });
});
