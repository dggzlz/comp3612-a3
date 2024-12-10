# COMP 3612 (Fall 2024)  
### Assignment #3: Node API  

Welcome to the **COMP3612-A3 Formula 1 API**!  
This API provides access to various Formula 1 data, including circuits, races, constructors, drivers, and results. Use the endpoints below to query the data.

---

## Available Endpoints  

### **Circuits**  
- **`GET /api/circuits`**: Fetch all circuits  
- **`GET /api/circuits/:id`**: Fetch a circuit by its ID  

### **Races**  
- **`GET /api/races`**: Fetch all races  
- **`GET /api/races/season/:year`**: Fetch all races for a specific season  
- **`GET /api/races/id/:id`**: Fetch a race by its ID  

### **Constructors**  
- **`GET /api/constructors`**: Fetch all constructors  
- **`GET /api/constructors/:ref`**: Fetch a constructor by its reference  

### **Drivers**  
- **`GET /api/drivers`**: Fetch all drivers  
- **`GET /api/drivers/:ref`**: Fetch a driver by their reference  

### **Results**  
- **`GET /api/results`**: Fetch all race results  
- **`GET /api/results/:constructorRef/:year`**: Fetch results for a constructor in a given year  
- **`GET /api/results/race/:id`**: Fetch results for a specific race  
- **`GET /api/results/season/:year`**: Fetch all results for a season  
- **`GET /api/results/driver/:driverRef/:year`**: Fetch results for a driver in a given year  

---

## Instructions  

For detailed instructions on how to run and use this API, please refer to the provided `COMP3612 Assignment 3.pdf`.  

---
## Testing



- [/api/circuits](https://comp3612-a3.onrender.com/api/circuits) 
- [/api/circuits/1](https://comp3612-a3.onrender.com/api/circuits/1)  
- [/api/constructors](https://comp3612-a3.onrender.com/api/constructors)  
- [/api/constructors/mclaren](https://comp3612-a3.onrender.com/api/constructors/mclaren) 
- [/api/coNStructors/mclaren](https://comp3612-a3.onrender.com/api/constructors/mclaren)
- [/api/constructors/javascript](https://comp3612-a3.onrender.com/api/constructors/javascript)
- [/api/constructorResults/mclaren/2023](https://comp3612-a3.onrender.com/api/constructorResults/mclaren/2023)
- [/api/constructorResults/MERCEDES/2020](https://comp3612-a3.onrender.com/api/constructorResults/MERCEDES/2020)
- [/api/constructorResults/mclaren/2040](https://comp3612-a3.onrender.com/api/constructorResults/mclaren/2040) 
- [/api/constructorResults/comp3612/2023](https://comp3612-a3.onrender.com/api/constructorResults/comp3612/2023)
- [/api/drivers](https://comp3612-a3.onrender.com/api/drivers)
- [/api/drivers/hamilton](https://comp3612-a3.onrender.com/api/drivers/hamilton)
- [/api/drivers/HAMilton](https://comp3612-a3.onrender.com/api/drivers/hamilton)
- [/api/drivers/randy](https://comp3612-a3.onrender.com/api/drivers/randy)
- [/api/driverResults/piastre/2023](https://comp3612-a3.onrender.com/api/driverResults/piastre/2023)
- [/api/driverResults/piastre/2002](https://comp3612-a3.onrender.com/api/driverResults/piastre/2002)
- [/api/races/season/2023](https://comp3612-a3.onrender.com/api/races/season/2023)
- [/api/races/seasoning/2023](https://comp3612-a3.onrender.com/api/races/seasoning/2023)
- [/api/races/season/2032](https://comp3612-a3.onrender.com/api/races/season/2032)
- [/api/results/race/1100](https://comp3612-a3.onrender.com/api/results/race/1100)
- [/api/results/race/1756348576](https://comp3612-a3.onrender.com/api/results/race/1756348576)
- [/api/results/season/2023](https://comp3612-a3.onrender.com/api/results/season/2023)
- [/api/results/season/2034](https://comp3612-a3.onrender.com/api/results/season/2034)

---

## Contact  

For more details, refer to the documentation or contact the developer.  

---

### Developed By:  
**Diego Gonzalez Reyes**  
**Mount Royal University**  
COMP3612 Assignment 3  


