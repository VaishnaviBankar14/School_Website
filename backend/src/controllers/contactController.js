const prisma = require("../config/prisma");

const createContact = async (req, res) => {
  try {

    const contact = await prisma.contactMessage.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
      }
    });

    res.status(201).json({
      success: true,
      data: contact
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

const getAllContacts = async (req, res) => {
  try {

    const contacts =
      await prisma.contactMessage.findMany({
        orderBy: {
          createdAt: "desc"
        }
      });

    res.status(200).json({
      success: true,
      data: contacts
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

const deleteContact = async (req, res) => {
  try {

    await prisma.contactMessage.delete({
      where: {
        id: Number(req.params.id)
      }
    });

    res.status(200).json({
      success: true,
      message: "Contact message deleted"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

module.exports = {
  createContact,
  getAllContacts,
  deleteContact
};