// Makes available at Peel Car Sales (from peelcarsales.com inventory filter)
// Models per make — popular models stocked at GTA used car dealerships

export const MAKES = [
  "Audi",
  "BMW",
  "Cadillac",
  "Chevrolet",
  "Chrysler",
  "Dodge",
  "Ford",
  "Honda",
  "Hyundai",
  "Infiniti",
  "Jeep",
  "Kia",
  "Land Rover",
  "Lexus",
  "Mazda",
  "Mercedes-Benz",
  "Nissan",
  "Porsche",
  "Ram",
  "Tesla",
  "Toyota",
  "Volkswagen",
  "Volvo",
] as const;

export const MODELS_BY_MAKE: Record<string, string[]> = {
  "Audi": ["A3", "A4", "A5", "A6", "A7", "A8", "Q3", "Q5", "Q7", "Q8", "S3", "S4", "S5", "e-tron"],
  "BMW": ["2 Series", "3 Series", "4 Series", "5 Series", "7 Series", "X1", "X2", "X3", "X4", "X5", "X6", "X7", "M3", "M5"],
  "Cadillac": ["ATS", "CTS", "CT4", "CT5", "Escalade", "SRX", "XT4", "XT5", "XT6", "XTS"],
  "Chevrolet": ["Camaro", "Cruze", "Equinox", "Impala", "Malibu", "Silverado", "Sonic", "Spark", "Suburban", "Tahoe", "Trailblazer", "Traverse", "Trax"],
  "Chrysler": ["200", "300", "Pacifica", "Town & Country"],
  "Dodge": ["Challenger", "Charger", "Durango", "Grand Caravan", "Journey"],
  "Ford": ["Edge", "Escape", "Expedition", "Explorer", "F-150", "F-250", "Focus", "Fusion", "Mustang", "Ranger", "Transit"],
  "Honda": ["Accord", "Civic", "CR-V", "Fit", "HR-V", "Odyssey", "Passport", "Pilot", "Ridgeline"],
  "Hyundai": ["Accent", "Elantra", "Kona", "Palisade", "Santa Fe", "Sonata", "Tucson", "Veloster", "Venue"],
  "Infiniti": ["Q50", "Q60", "Q70", "QX30", "QX50", "QX60", "QX70", "QX80"],
  "Jeep": ["Cherokee", "Compass", "Gladiator", "Grand Cherokee", "Patriot", "Renegade", "Wrangler"],
  "Kia": ["Forte", "K5", "Optima", "Rio", "Sedona", "Seltos", "Sorento", "Soul", "Sportage", "Stinger", "Telluride"],
  "Land Rover": ["Discovery", "Discovery Sport", "Range Rover", "Range Rover Evoque", "Range Rover Sport", "Range Rover Velar"],
  "Lexus": ["ES", "GS", "GX", "IS", "LS", "LX", "NX", "RC", "RX", "UX"],
  "Mazda": ["CX-3", "CX-30", "CX-5", "CX-7", "CX-9", "Mazda3", "Mazda6", "MX-5"],
  "Mercedes-Benz": ["A-Class", "C-Class", "CLA", "CLS", "E-Class", "G-Class", "GLA", "GLB", "GLC", "GLE", "GLS", "S-Class", "SL"],
  "Nissan": ["Altima", "Armada", "Frontier", "Kicks", "Maxima", "Murano", "Pathfinder", "Rogue", "Sentra", "Titan", "Versa"],
  "Porsche": ["911", "Boxster", "Cayenne", "Cayman", "Macan", "Panamera", "Taycan"],
  "Ram": ["1500", "2500", "3500", "ProMaster"],
  "Tesla": ["Model 3", "Model S", "Model X", "Model Y"],
  "Toyota": ["4Runner", "Avalon", "Camry", "Corolla", "Highlander", "Prius", "RAV4", "Sienna", "Tacoma", "Tundra", "Venza"],
  "Volkswagen": ["Atlas", "Beetle", "Golf", "Jetta", "Passat", "Tiguan", "Touareg"],
  "Volvo": ["S60", "S90", "V60", "V90", "XC40", "XC60", "XC90"],
};

// Price options $1,000 → $80,000 in $1,000 increments (matches Peel inventory filter range)
export const PRICE_OPTIONS = (() => {
  const prices: number[] = [];
  for (let p = 1000; p <= 80000; p += 1000) {
    prices.push(p);
  }
  return prices;
})();

export function formatPrice(value: number): string {
  return `$${value.toLocaleString()}`;
}
