import { GoogleSpreadsheet } from "google-spreadsheet"
import { fromBase64 } from "../../utils/base64"

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: fromBase64(process.env.SHEET_PRIVATE_KEY),
    })
    await doc.loadInfo()
    console.log(doc.title)
    const sheet = doc.sheetsByIndex[0]

    const rows = await sheet.getRows()
    const professionals = rows
      .filter((i) => i.Ativo.toLowerCase() === "true")
      .map((i) => ({
        nome: i.Nome,
        tel: i.Telefone,
        isWhats: i.Whatsapp === "TRUE" ? true : false,
        atuacao: i.Atuacao,
        category: i.Categoria,
        instagram: i.Instagram,
      }))

    res.json(professionals)
  } catch (error) {
    console.log(error)
    res.json({})
  }
}
