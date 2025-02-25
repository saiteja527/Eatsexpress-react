import foodModel from "../models/foodModel.js";
import fs from "fs";

const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;
  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });
  try {
    await food.save();
    res.json({ success: true, message: "Food Added Successfully" });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "Error" });
  }
};

const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const removefood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    fs.unlinkSync(`uploads/${food.image}`, () => {});

    await foodModel.findByIdAndDelete(req.body.id);
    const foods = await foodModel.find({});
    res.json({
      success: true,
      message: "Food Removed Successfully",
      updatedData: foods,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { addFood, listFood, removefood };
