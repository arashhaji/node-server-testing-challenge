const db = require("../data/dbConfig.js");

const Books = require("./bookModel.js");

describe("book model", () => {
  describe("insert()", () => {
    it("should insert book", async () => {
      await Books.insert({ title: "the hobbit", author: "jrr tolkien" });
      const books = await db("books");
      expect(books).not.toBeLessThan(3);
    });
  });

    describe("remove()", () => {
      it("should delete book", async () => {
        await Books.remove({ id: 1 });
        const books = await db("books");
        expect(books.length).not.toContain({
          title: "harry potter and the sorcerer's stone",
          author: "j.k. rowling"
        });
      });
    });
  });