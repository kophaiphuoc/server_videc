const {getApi,postApi} = require('../API')

const videc = {
    getListUser:async(req,res)=>{
        try {
            const respone = await getApi('client-list-temp/VIDEC2023')
            if(respone.status_code === 200){
                res.status(200).json(respone.data)
            }else{
                res.status(404).json('lỗi hệ thống')
            }
        } catch (error) {
            res.status(500).json(error)
        }
    },
    postStatusUser:async(req,res)=>{
        const data = req.body
        console.log(data)
        // res.status(200).json(data)
        try {
            const respone = await postApi('update-client',data)
            if(respone.status_code === 200){
                res.status(200).json(respone.status_code)
            }else{
                res.status(404).json('không tìm thấy')
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = {videc}