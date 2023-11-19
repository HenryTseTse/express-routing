const express = require('express');
const app = express();
const ExpressError = require('./expressError');

const { convertNumsArray, findMode, findMean, findMedian } = require('./helpers');

app.get('/mean', function(req, res) {
    if (!req.query.nums) {
        throw new ExpressError('Nums are Required', 400)
    }
    let numsSplit = req.query.nums.split(',');
    let nums = convertNumsArray(numsSplit);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "mean",
        value: findMean(nums)
    }

    return res.send(result);
})

app.get('/median', function(req,res) {
    if (!req.query.nums) {
        throw new ExpressError('Nums are Required', 400)
    }
    let numsSplit = req.query.nums.split(',');
    let nums = convertNumsArray(numsSplit);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "median",
        value: findMedian(nums)
    }

    return res.send(result);
})

app.get('/mode', function(req,res) {
    if (!req.query.nums) {
        throw new ExpressError('Nums are required', 400)
    }
    let numsSplit = req.query.nums.split(',');
    let nums = convertNumsArray(numsSplit);
    if (nums instanceof Error) {
        throw new Error(nums.message);
    }

    let result = {
        operation: "mode",
        value: findMode(nums)
    }

    return res.send(result);
})

app.use(function (req,res,next) {
    const err = new ExpressError("Not Found", 404);

    return next(err);
});

app.use(function(err,req,res,next) {
    res.status(err.status || 500);

    return res.json({
        error: err,
        message: err.message
    });
});

app.listen(3000, function() {
    console.log('Starting Server on Port 3000')
});