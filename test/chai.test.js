import 'babel-polyfill'
const expect = require('chai').expect;
const request = require('supertest');
const app = require('../app')

describe('user_api', () => {
    it('getUser', (done) => {
        request(app.listen())
            .get('/api/users/getUser?id=1')
            .expect(200)
            .end((err, res) => {
                expect(res.body.data).to.be.an('object');
                done()
            })
    })

    it('registerUser', (done) => {
        var user = {
            username: '黄强2',
            age: 31
        }
        request(app.listen())
            .post('/api/users/registerUser')
            .send(user)
            .set('Content-Type', 'application/json')
            .expect(200)
            .end((err, res) => {
                expect(res.body.code).to.be.equal(10001)
                done()
            })
    })
})