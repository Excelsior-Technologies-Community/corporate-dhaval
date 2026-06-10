const db = require("../Middleware/db")

const addproduct = async(req , res)=>{
    try{
        const{iname , price , descr} = req.body
        const sql = "INSERT INTO items (iname , price , descr ) VALUES (?,?,?)"

        db.query(sql,[iname , price , descr] ,(err , result)=>{
            if(err){
                res.status(404).json({
                    message:'you have error'
                })
            }
            res.status(200).json({
                message:"items added successfully",
                data:result
            })
        })
    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}
const getproduct = async(req , res)=>{
    try{
        const {id}= req.params
        const sql = "SELECT * FROM items WHERE id = ?"
        db.query(sql , [id] , (err , result)=>{
            if(err){
                res.status(500).json({
                    message:err.message
                })
            }
            res.status(200).json({
                message:"item fetched ",
                data:result
            })

        })
    }catch(err){
        res.status(505).json({
            message:err.message
        })
    }
}
const updateitem = async(req , res)=>{
    try{
        const { id } = req.params
        const { iname , descr , price } = req.body

        const sql = `
        UPDATE items
        SET iname = ?, price = ?, descr = ?
        WHERE id = ?
        `

        db.query(
            sql,
            [iname, price, descr, id],
            (err, result)=>{
                if(err){
                    return res.status(500).json({
                        message: err.message
                    })
                }

                res.status(200).json({
                    message: "Item updated",
                    data: result
                })
            }
        )

    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
}
const patchitem = async(req , res)=>{
    try{
        const {id}= req.params
        const {iname , price , descr} = req.body

        let sql = "UPDATE items SET "
        let values = []
        if(iname){
            sql += "iname =?,"
            values.push(iname)
        }
        if(price){
            sql += "price =?,"
            values.push(price)
        }
        if(descr){
            sql +="descr =?, "
            values.push(descr)
        }
        sql = sql.slice(0, -1);
        sql += " WHERE id =?"
        values.push(id)
        db.query(sql , values , (err , result)=>{
            if(err){
                res.status(500).json({
                    message:err.message
                })
            }
            res.status(200).json({
                message:"item pathced ",
                data:result
            })
        })

    }catch(err){
         res.status(500).json({
            message: err.message
        })
    }
}
const deleteitem = async(req , res)=>{
    try{
        const {id} = req.params
        const sql = "DELETE FROM items WHERE id = ?"
        db.query(sql , [id] , (err,result)=>{
            if(err){
                res.status(500).json({
                    message:err.message
                })
            }
            res.status(200).json({
                message:"item deleted successfully"
            })
        })
    }catch(err){
         res.status(500).json({
            message: err.message
        })
    }
}
module.exports = {addproduct , getproduct , updateitem , patchitem , deleteitem}