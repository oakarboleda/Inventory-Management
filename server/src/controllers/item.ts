import { Request, Response, NextFunction } from "express";
const Items = require("../models/Items");

module.exports.get = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { itemData } = req.body.tokenData;

  const u = await Items.getAll(itemData.item_id);
  res.status(200).send(u);
};
