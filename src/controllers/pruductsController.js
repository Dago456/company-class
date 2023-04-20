import products from "../models/productsModel";

export const obtenerProductos = async (req, res) => {
    const productos = await products.findAll();
    res.json(productos);
};

export const obtenerProductoPorId = async (req, res) => {

    const producto = await products.findByPk(req.params.id);
    res.json(producto);
};

export const crearProducto = async (req, res) => {

    const crearPro = await products.create(req.body)
    res.json(crearPro);
};

export const actualizarProductoPorId = async (req, res) => {

    const producto = await products.findByPk(req.params.id);
    console.log(producto)
    const actualizarProductoPorId = await products.update(req.body)
    console.log(actualizarProductoPorId);
    res.json("actualizarProductoPorId")
};

export const eliminarProductoPorId = async (req, res) => {

    const producto = await products.findByPk(req.params.id);
    await products.destroy();
    res.json("eliminarProductoPorId");
};