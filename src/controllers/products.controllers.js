import * as productService from "../services/products.services.js";

export const addProduct = async (req, res) => {
  try {
    const {
      nombre,
      precio,
      categoria,
      imagen,
      description,
      descripion // typo viejo
    } = req.body;

    const descriptionFinal = description ?? descripion ?? "";

    // Validación básica
    if (!nombre || precio === undefined || precio === null || !categoria) {
      return res.status(400).json({
        message: "Faltan campos obligatorios: nombre, precio, categoria",
      });
    }

    // Normalización + tipos
    const product = {
      nombre: String(nombre).trim(),
      precio: Number(precio),
      categoria: String(categoria).trim(),
      imagen: imagen ? String(imagen).trim() : "",
      description: String(descriptionFinal).trim(),
    };

    const newProduct = await productService.addProductService(product);
    return res.status(200).json(newProduct);
  } catch (error) {
    return res.status(500).send();
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Falta id en params" });
    }

    await productService.deleteProductService(id);
    return res.sendStatus(200);
  } catch (error) {
    return res.status(500).send();
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProductsService();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).send();
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Falta id en params" });
    }

    const product = await productService.getProductByIdService(id);

    if (product) {
      return res.status(200).json(product);
    }

    return res.status(404).json({ message: "Producto no encontrado" });
  } catch (error) {
    return res.status(500).send();
  }
};
