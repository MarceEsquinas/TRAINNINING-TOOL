// Controlador para la ruta de prueba.
// Aquí se procesa la lógica de negocio y se prepara la respuesta.
export async function getTestRoute(req, res) {
  try {
    const responsePayload = {
      success: true,
      message: 'Ruta de prueba funcionando correctamente',
      serverTime: new Date().toISOString(),
    };

    // Retornamos la respuesta al cliente.
    res.json(responsePayload);
  } catch (error) {
    console.error('Error en testController.getTestRoute:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno en el controlador de prueba',
      error: error.message,
    });
  }
}
