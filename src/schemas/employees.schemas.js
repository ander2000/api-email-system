import joi from "joi";

const id = joi.number().integer().positive();
const name = joi.string().min(5).max(30);
const salary = joi.number().integer().positive().min(1000);

export const getEmployeeSchema = joi.object({
    id : id.required(),
});

export const deleteEmployeeSchema = joi.object({
    id : id.required(),
})

export const createEmployeeSchema = joi.object({
    name: name.required(),
    salary: salary.required()
})

export const updateEmployeeSchema = joi.object({
    id: id.required(),
    name: name,
    salary: salary,
})