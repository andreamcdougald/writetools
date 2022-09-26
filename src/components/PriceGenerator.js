import { createContext } from "react";

// Load Chance
var Chance = require("chance");

// Instantiate Chance so it can be used
var chance = new Chance();

// Use Chance here.
var price = chance.weighted(["$5", "$15", "$30"], [0.33, 0.33, 0.33]);

const PriceContext = createContext([price, () => {}]);

export default PriceContext;
