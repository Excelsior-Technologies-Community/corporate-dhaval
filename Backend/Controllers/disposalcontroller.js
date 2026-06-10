const db = require("../Middleware/db")
const createrq = async(req , res)=>{
    try{
        const {
            item_name,
            description,
            resident_id,
            weight,
            address
        } = req.body;
        console.log(req.file)
   const item_photo = req.files?.item_photo
    ? req.files.item_photo[0].filename
    : null;

        const sql =
        "INSERT INTO disposal_request(item_name,description,resident_id,weight,address,item_photo) VALUES(?,?,?,?,?,?)";

        db.query(
            sql,
            [
                item_name,
                description,
                resident_id,
                weight,
                address,
                item_photo
            ],
            (err, result)=>{

                if(err){
                    return res.status(500).json({
                        message: err.message
                    });
                }

                const historysql =
                "INSERT INTO status_history(request_id,status) VALUES(?,?)";

                db.query(
                    historysql,
                    [result.insertId, "Listed"]
                );

                return res.status(200).json({
                    message:"request created"
                });
            }
        );

    }catch(err){
        return res.status(500).json({
            message:err.message
        });
    }
}
const getlisted = async(req , res)=>{
    try{
        const sql = "SELECT * FROM disposal_request WHERE status = 'Listed'"

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: err.message
            });
        }

        return res.status(200).json(result);

    });
    }catch(err){
         return res.status(500).json({
            message:err.message
        });
    }
}
const claimrq = async(req , res)=>{
    try{
            const {id} = req.params
            const{collector_id} = req.body

            const sql = "UPDATE disposal_request SET  collector_id=? , status ='claimed' WHERE id  =?"

            db.query(sql , [collector_id , id] , (err , result)=>{
                      if (err) {
                return res.status(500).json({
                    message: err.message
                });
            }

            const historySql = `
            INSERT INTO status_history
            (
                request_id,
                status
            )
            VALUES(?,?)
            `;

            db.query(
                historySql,
                [id, "claimed"]
            );

            return res.status(200).json({
                message: "Request Claimed"
            });
            })
    }catch(err){
         return res.status(500).json({
            message:err.message
        });
    }
}
const find = async(req , res)=>{
    const {id} = req.params
 
const findsql = `
SELECT resident_id, weight
FROM disposal_request
WHERE id = ?
`;

    db.query(findsql , [id] , (err , result)=>{
        if(err){
            return res.status(500).json({
                messaga:err.message
            })
        }
        const weight = result[0].weight
        const point = weight*10
        const resident_id = result[0].resident_id

        const updaterq = "UPDATE disposal_request SET eco_points =? , status='impact earned' WHERE id =?"

        db.query(updaterq , [point , id])

        const updateuser = "UPDATE users SET eco_points = eco_points + ? WHERE id =?"
         db.query(
                updateuser,
                [point, resident_id]
            );

            db.query(
                `
                INSERT INTO status_history
                (
                    request_id,
                    status
                )
                VALUES(?,?)
                `,
                [id, "impact earned"]
            );

            return res.status(200).json({
                message: "Impact Earned",
                eco_points: point
            });

    })
}
module.exports = {createrq , getlisted , claimrq , find }