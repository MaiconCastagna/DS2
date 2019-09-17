module.exports = app => {
    app.post('/tarefa02', (req, res) => {
        var { salario, percReajuste } = req.body;
        var salarioReajustado = salario * (1 + (percReajuste / 100))

        res.send({
            salario: salario,
            percentual: percReajuste,
            salarioReajustado: salarioReajustado
        });
    });
}