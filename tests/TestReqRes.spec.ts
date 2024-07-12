import {test, expect} from "playwright/test";

test("check fake data", async ({ page }) => {
await page.goto("https://reqres.in/");
let data = page.getByRole('heading', { name: 'Fake data' });
    await expect(data).toBeVisible();
})

test('check Real responses', async ({ page }) =>{
    await page.goto("https://reqres.in/");
    let responses = page.getByRole('heading', { name: 'Real responses' });
    await expect(responses).toBeVisible();
})

test('check Always-on', async ({page}) => {
    await page.goto("https://reqres.in/");
    let always = page.getByRole('heading', { name: 'Always-on' });
    await expect(always).toBeVisible();
})

test('check Support ReqRes', async ({page}) => {
    await page.goto("https://reqres.in/");
    let reqres = page.getByRole('link', { name: 'Support ReqRes' });
    await expect(reqres).toBeVisible();
})

const axios = require('axios');

test('POST request example', async () => {
    const userData = {
       "name": "morpheus",
       "job": "leader"
    };
    const response = await axios.post('https://reqres.in/api/users', userData);
    expect(response.status).toBe(201);
    console.log(response);
})