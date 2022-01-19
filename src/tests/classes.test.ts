import supertest from 'supertest';
import app from '../server';
import mongoose from 'mongoose';

describe("classes", () => {
    describe("git classes route", () => {
        describe("assert that will be return forbidden", () => {
            it("should return a 401", async() => {
                await supertest(app).get('/classes').expect(401);
            });
        });
    });
});