function handler (req, res) {
   const eventId = req.query.eventId;
   
   if (req.body.method === 'POST') {
        const {email, name, text } = req.body;

        if (
          !email.includes('@') || 
          !name || 
           name.trim() === '' || 
           !text || 
           text.trim() === ''
        ) {
            res.status(422).json({ message: 'Invalid details'});
            return;
        }
        const newComment = {
            id: newDate().toISOString(),
            email,
            name,
            text,
        };
        console.log(newComment);

        res.status(201).json ({message: 'comment added', comment: newComment})
   }

   if (req.method === 'GET') {
     const dummyList = [
        {
         id: 'c1', 
         name: 'zing', 
         text: ' how the go dey go 1',
        },

        {
         id: 'c1', 
         name: 'li', 
         text: ' how the go dey go my g',
        },
     ];

     res.status(200).json({comments: dummyList})
   }
}


export default handler;