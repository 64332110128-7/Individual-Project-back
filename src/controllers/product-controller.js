const prisma = require("../config/prisma");
const createError = require("../utils/createError");

exports.getProductsLanding = async (req, res, next) => {
  try {
    const product = await prisma.product.findMany({
      include: {
        brand: true,
        collection: true,
        series: true,
        product_img: true,
      },
    });
    if (!product) {
      return createError(404, "Product not found");
    }
    res.json({ product });
  } catch (err) {
    next(err);
  }
};

exports.getProducts = async (req, res, next) => {
  try {
    const product = await prisma.product.findMany({
      include: {
        brand: true,
        collection: true,
        series: true,
        product_img: true,
      },
    });
    if (product.length === 0) {
      return createError(404, "Product not found");
    }
    res.json({ product });
  } catch (err) {
    next(err);
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const product = await prisma.product.findFirst({
      where: {
        id: Number(productId),
      },
      include: {
        brand: true,
        collection: true,
        series: true,
        product_img: true,
      },
    });
    if (!product) {
      return createError(404, "Product ID not found");
    }
    if (product === null) {
      return createError(400, "Product ID = " + productId + " have no item");
    }
    res.json({ product });
  } catch (err) {
    next(err);
  }
};
