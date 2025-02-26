export default function listUserController(req, res) {
    return res.json([
        {
            id: 1,
            name: "Renan Cavichi",
            email: "renancavichi@gmail.com"
        },
        {
            id: 2,
            name: "Maria",
            email: "maria@gmail.com"
        },
        {
            id: 3,
            name: "João",
            email: "joão@gmail.com"
        }
    ])
}