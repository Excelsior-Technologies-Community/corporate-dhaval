const db = require("../Middleware/db")

const request = async(req , res)=>{
    try{
        const{client_id , service_id , address , description , preffered_time , preffered_date , extracharge } = req.body
        
        const searchsql = "SELECT * FROM service WHERE id =?"
        db.query(searchsql , [service_id ] ,(err , service)=>{
            if(err){
                return res.status(500).json({
                    message:err.message
                })
            }
            if(service.length===0){
                return res.status(400).json({
                    message:"service not found"
                })
            }
            const total = Number(service[0].base_price)+Number(extracharge ||0)
            const status = "requested"

            const orderquery = "INSERT INTO orders (client_id , service_id , address , description , preffered_date , preffered_time , extracharge , status , total_amount ) VALUES(?,?,?,?,?,?,?,?,?)"
            db.query(orderquery,[client_id , service_id , address , description ,preffered_date , preffered_time  , extracharge , status, total ] , (err , result)=>{
                if(err){
                    return res.status(500).json({
                        message:err.message
                    })
                }
                const historysql = "INSERT INTO status_history (order_id , status) VALUES (?,?)"

                db.query(historysql , [result.insertId , status],(err , result)=>{
                    if(err){
                        return res.status(500).json({
                            message:err.message
                        })
                    }
                    return res.status(200).json({
                        message:"request created",
                       order_id : result.insertId,
                       total_amount:total
                    })
                })
            })
        })
    }catch(err){
        return res.status(500).json({
            message:err.message
        })
    }
}


const updatestatus = async(req , res)=>{
    try{
        const {id} = req.params
        const{status} = req.body

        const sql = "SELECT * FROM orders WHERE id =?"
        console.log("Order ID:", req.params.id);
        db.query(sql, [id] , (err , result)=>{
            console.log(result)
            if(err){
                return res.status(500).json({
                    message:err.message
                })
            }
            console.log(result)
            const currentstatus = result[0].status

            const validtransition = {
                "requested":"assigned",
                "assigned" :"in-progress",
                "in-progress":"review-required",
                "review-required":"completed"
            }
            if(validtransition[currentstatus] !== status){
                return res.status(400).json({
                    message:`you can't move direct ${currentstatus} to ${status}`

                })
            }
            const updatesql = "UPDATE orders SET status = ? WHERE id = ?"
            db.query(updatesql , [status , id],(err , result)=>{
                if(err){
                    return res.status(500).json({
                        message:err.message
                    })
                }
                const historysql = "INSERT INTO status_history (order_id , status) VALUES (?,?)"
                db.query(historysql , [ id , status],(err , result)=>{
                        if(err){
                            return res.status(500).json({
                                message:err,message
                            })
                        }
                        return res.status(200).json({
                            message:"status updated",
                            currentstatus :status
                        })
                })
            })
        })
    }catch(err){
        return res.status(500).json({
            message:err.message
        })
    }
}
const getServices = (req, res) => {
  const sql = "SELECT * FROM service";

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: err.message,
      });
    }

    return res.status(200).json(result);
  });
};
const servicebyid = async(req , res)=>{
    try{
    const {id} = req.params
    const sql = "SELECT * FROM orders WHERE id = ?"

    db.query(sql , [id] , (err , result)=>{
        if(err){
            return res.status(500).json({
                message:err.message
            })
        }
        return res.status(200).json({
            message:"orders got succesffully",
            data:result
        })
    })
    }catch(err){
        return res.status(500).json({
            message:err.message
        })
    }


}
module.exports = {
    request , updatestatus , getServices , servicebyid
};