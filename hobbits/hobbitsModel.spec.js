const db = require("../data/dbConfig");

const Hobbits = require("../hobbits/hobbitsModel");

beforeEach(async () => {
  await db("hobbits").truncate();
});

describe("hobbits model", () => {
  describe("insert function", () => {
    it("should add a hobbit", async () => {
      await Hobbits.add({ name: "Pippin" });
      await Hobbits.add({ name: "Bilbo" });
      const hobbits = await db("hobbits");
      expect(hobbits).toHaveLength(2);
    });

    it("should add name column to db", async () => {
      await Hobbits.add({ name: "Sharon" });
      const hobbits = await db("hobbits");
      expect(hobbits[0]).toHaveProperty("name");
    });
  });

  it("should get all hobbits", async () => {
    const res = await req.getAll();
    expect(res.statusCode).toBe(200);
    expect(res.body).not.toBeNull();
  });

  describe("remove function", () => {
    it("should remove a hobbit", async () => {
      let hobbits;

      await Hobbits.add({ name: "Pippin" });

      hobbits = await db("hobbits");

      expect(hobbits).toHaveLength(1);

      await Hobbits.remove("1");

      hobbits = await db("hobbits");

      expect(hobbits).toHaveLength(0);
    });

    it("should show number of hobbits deleted", async () => {
      await Hobbits.add({ name: "Sharon" });

      const removedHobbit = await Hobbits.remove(1);

      expect(removedHobbit).toBe(1);
    });
  });
});
