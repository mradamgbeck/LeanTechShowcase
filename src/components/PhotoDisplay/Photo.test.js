import { cleanup, render } from "@testing-library/react";
import Photo from "./Photo";

afterEach(cleanup);

describe("Photo", () => {
  let photoData = {
    id: 1234,
    title: "Mr. Photo",
    albumId: 4321,
    thumbnailUrl: "www.bobloblawslawblog.blog/thumbs",
    url: "www.bobloblawslawblog.blog",
  };

  it("displays photo id", () => {
    const { getByTestId } = render(<Photo data={photoData} />);
    const html = getByTestId("id");
    expect(html.innerHTML).toEqual(`Id: ${photoData.id}`);
  });

  it("displays photo title", () => {
    const { getByTestId } = render(<Photo data={photoData} />);
    const html = getByTestId("title");
    expect(html.innerHTML).toEqual(`Title: ${photoData.title}`);
  });

  it("displays photo album id", () => {
    const { getByTestId } = render(<Photo data={photoData} />);
    const html = getByTestId("album");
    expect(html.innerHTML).toEqual(`Album: ${photoData.albumId}`);
  });

  it("displays photo thumbnail", () => {
    const { getByTestId } = render(<Photo data={photoData} />);
    const html = getByTestId("thumbnail");
    expect(html.getAttribute("src")).toEqual(photoData.thumbnailUrl);
  });

  it("links thumbnail to full image", () => {
    const { getByTestId } = render(<Photo data={photoData} />);
    const html = getByTestId("thumbnailLink");
    expect(html.getAttribute("href")).toEqual(photoData.url);
  });
});
