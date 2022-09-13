const Parser = require('rss-parser');


let parser = new Parser();


const xmlParser = async (req, res) => {
    try {
        const feed = await parser.parseURL(process.env.JOBS_URL);
        const jobs = feed.items.map((job) => {
            let theJob=job.title.split("-")
           let  newJob={
                title:theJob[0],
                location: job.title.replace(theJob[0],'').replace('-',''),
           }
            return newJob
        });
        res.status(200).json({count:jobs.length,data:jobs});
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}


        


module.exports = {xmlParser}