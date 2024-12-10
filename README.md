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



- [/api/circuits](https://your-host-url/api/circuits) 
- [/api/circuits/1](https://your-host-url/api/circuits/1)  
- [/api/constructors](https://your-host-url/api/constructors)  
- [/api/constructors/mclaren](https://your-host-url/api/constructors/mclaren) 
- [/api/coNStructors/mclaren](https://your-host-url/api/constructors/javascript)
- [/api/condstructors/javascript](https://your-host-url/api/constructors/javascript)
- [/api/constructorResults/mclaren/2023](https://your-host-url/api/constructorResults/mclaren/2023)
- [/api/constructorResults/MERCEDES/2020](https://your-host-url/api/constructorResults/MERCEDES/2020)
- [/api/constructorResults/mclaren/2040](https://your-host-url/api/constructorResults/mclaren/2040) 
- [/api/constructorResults/comp3612/2023]()
- [/api/drivers](https://your-host-url/api/drivers)
- [/api/drivers/hamilton](https://your-host-url/api/drivers/hamilton)
- [/api/drivers/HAMilton](https://your-host-url/api/driverResults/piastre/2023)
- [/api/drivers/randy](https://your-host-url/api/driverResults/piastre/2002)
- [/api/driverResults/piastre/2023](https://your-host-url/api/races/season/2023)
- [/api/driverResults/piastre/2002](https://your-host-url/api/races/season/2032)
- [/api/races/season/2023](https://your-host-url/api/results/race/1100)
- [/api/races/seasoning/2023](https://your-host-url/api/results/race/1756348576)
- [/api/races/season/2032](https://your-host-url/api/results/season/2023)
- [/api/results/race/1100](https://your-host-url/api/results/season/2034)
- [/api/results/race/1756348576]
- [/api/results/season/2023]
- [/api/results/season/2034]

---

## Contact  

For more details, refer to the documentation or contact the developer.  

---

### Developed By:  
**Diego Gonzalez Reyes**  
**Mount Royal University**  
COMP3612 Assignment 3  


