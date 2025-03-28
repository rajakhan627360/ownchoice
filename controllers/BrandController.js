const Brand = require("../models/Brand")
const fs = require("fs")

async function createRecord(req, res) {
    try {
        var data = new Brand(req.body)
        if (req.file) {
            data.pic = req.file.path
        }
        await data.save()
        res.send({ result: "Done", data: data })
    } catch (error) {
        let errorMessage = {}
        error.keyValue ? errorMessage['name'] = "Brand Name iS Already Exist" : null
        error.errors?.name ? errorMessage['name'] = error.errors?.name?.message : null
        error.errors?.pic ? errorMessage['pic'] = error.errors?.pic?.message : null


        try {
            fs.unlinkSync(data.pic)
        } catch (error) {
            console.log(error);
        }



        Object.keys(errorMessage).length === 0 ?
            res.status(500).send({ result: "Fail", reason: "Internel Server Error" }) :
            res.send({ result: "Fail", reason: "Missing Or Invalid Fields", error: errorMessage })

    }


}


async function getRecord(req, res) {
    try {
        const data = await Brand.find().sort({ _id: -1 })
        res.send({ result: "Done", data: data, count: data.length })
    } catch (error) {
        res.status(500).send({ result: "Fail", reason: "Internal Server Error" })
    }
}

async function getSingleRecord(req, res) {
    try {
        const data = await Brand.findOne({ _id: req.params._id })
        if (data)
            res.send({ result: "Done", data: data })
        else
            res.status(404).send({ result: "Fail", reason: "Record Not Found" })
    } catch (error) {
        res.status(500).send({ result: "Fail", reason: "Internal Server Error" })
    }
}

async function updateRecord(req, res) {
    try {
        var data = await Brand.findOne({ _id: req.params._id })
        if (data) {
            data.name = req.body.name ?? data.name
            data.active = req.body.active ?? data.active
            if (req.file) {
                try {
                    fs.unlinkSync(data.pic)
                } catch (error) { }
                data.pic = req.file.path
            }
            await data.save()
            res.send({ result: "Done", data: data })
        }
        else
            res.status(404).send({ result: "Fail", reason: "Record Not Found" })
    } catch (error) {
        console.log(error);

        let errorMessage = {}
        error.keyValue ? errorMessage['name'] = "Brand Name iS Already Exist" : null

        if (error.keyValue) {
            try {
                fs.unlinkSync(req.file.path)
            } catch (error) { }
        }

        Object.keys(errorMessage).length === 0 ?
            res.status(500).send({ result: "Fail", reason: "Internel Server Error" }) :
            res.send({ result: "Fail", reason: "Missing Fields", error: errorMessage })

    }
}

async function deleteRecord(req, res) {
    try {
        const data = await Brand.findOne({ _id: req.params._id })
        if (data) {
            try {
                fs.unlinkSync(data.pic)

            } catch (error) { }
            await data.deleteOne()
            res.send({ result: "Done", message: "Record Is Deleted" })
        }
        else
            res.status(404).send({ result: "Fail", reason: "Record Not Found" })
    } catch (error) {
        res.status(500).send({ result: "Fail", reason: "Internal Server Error" })
    }
}

module.exports = {
    getRecord,
    createRecord,
    getSingleRecord,
    updateRecord,
    deleteRecord
}