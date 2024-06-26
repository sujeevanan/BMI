

# BMI Calculator with API

A simple Body Mass Index (BMI) calculator built using React and powered by an API for BMI calculation. This tool helps users determine their BMI by inputting their weight and height.

## Features

- **Real-time Calculation**: Instant calculation of BMI by calling an API as users input their weight and height.
- **Responsive Design**: Works on all device sizes.
- **User-friendly Interface**: Simple and intuitive interface for easy use.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **CSS**: Styling the application.
- **API**: External API for BMI calculation.






## Usage

1. **Open the application** in your web browser.
2. **Enter your weight** in kilograms.
3. **Enter your height** in centimeters.
4. **View your BMI** calculated instantly and displayed on the screen.
5. **Read the message** indicating your BMI category (e.g., Underweight, Normal weight, Overweight, Obese).

## API Integration

This application uses an external API for BMI calculation. The API endpoint expects weight and height as parameters and returns the calculated BMI.

### API Endpoint

- **URL**: `https://api.example.com/bmi`
- **Method**: `POST`
- **Parameters**:
  - `weight` (in kilograms)
  - `height` (in centimeters)

### Example Request

```bash
POST /bmi
Content-Type: application/json

{
  "weight": 70,
  "height": 175
}
```

### Example Response

```json
{
  "bmi": 22.86,
  "category": "Normal weight"
}
```

## File Structure

- `src/`
  - `App.js`: Main component that includes the BMI Calculator component.
  - `BMICalculator.js`: Component handling the BMI calculation logic and UI.
  - `App.css`: Styling for the application.

## Contributing

1. **Fork the repository**.
2. **Create your feature branch**: `git checkout -b feature/your-feature-name`.
3. **Commit your changes**: `git commit -m 'Add some feature'`.
4. **Push to the branch**: `git push origin feature/your-feature-name`.
5. **Open a pull request**.

