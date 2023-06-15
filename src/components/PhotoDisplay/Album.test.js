import { cleanup, render, waitFor } from "@testing-library/react";
import Album from "./Album";
jest.mock("axios");
import axios from "axios";
import { BASE_URL } from "../../constants";
import { act } from "react-dom/test-utils";

let albumId = 2;
let photo = {
  id: 1234,
  title: "Mr. Photo",
  albumId: albumId,
  thumbnailUrl: "www.bobloblawslawblog.blog/thumbs",
  url: "www.bobloblawslawblog.blog",
};
let albumUrl = `${BASE_URL}/photos?albumId=${albumId}`;

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe("Album", () => {
  it("gets correct album with id", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve([photo]));
    await act(async () => {
      {
        render(<Album albumId={albumId} />);
      }
    });
    expect(axios.get).toHaveBeenCalledWith(albumUrl);
  });

  it("renders photos", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve([photo]));
    const { findByTestId } = render(<Album albumId={albumId} />);
    waitFor(() => {
      let html = findByTestId(photo.id);
      expect(html.getAttribute("className")).toEqual(`photo`);
    });
  });
});
