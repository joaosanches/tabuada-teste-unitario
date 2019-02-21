const tabuadaController = require('./tabuada')
const sinon = require('sinon')

describe('tabuada controller', () => {
    it('list', () => {

        const numeros = []
        for(let i = 1; i <= 100; i++) {
            numeros.push(i)
        }

        let res = {
            render: function() {}
        }

        let mock = sinon.mock(res)
        mock.expects('render').once().withArgs('tabuada/list', { numeros })
        tabuadaController.list({}, res)
    })

    it('multiplication table', () => {
        const tabuadas = []
        const num = 10

        for(let i = 1; i <= 10; i++) {
            tabuadas.push({
                num,
                i,
                resultado: num * i
            })
        }

        let req = {
            params: {
                num
            }
        }

        let res = {
            render: function() {}
        }

        let mock = sinon.mock(res)
        mock.expects('render').once().withArgs('tabuada/tabuada', {
            num,
            tabuadas
        })

        tabuadaController.tabuada(req, res)
    })

})