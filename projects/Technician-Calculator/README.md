<h1 align="center">Technician-Calculator</h1>
<p align="center">
    <img alt="Calculator Home" src="https://github.com/anew226/Technician-Calculator/blob/main/images/HomeScreen.jpg?raw=true">
</p>
Calculator organized by unit PN to speed up simple calculations for Aerospace Component Technicians.

---

## Increasing Productivity
For production, it is important that Technicians stay focused on **value added activities** such as increasing their 'touch time' on units. If a worker spends a little less time performing simple calculations, it is a small win for production.

## 5 Different Types of Calculations
1. Speed
2. LVDT Adjustement
3. Damping Coefficient for PN: 31073
4. Seal Friction for PN: 31077
5. Special Null Ajustment for PNs: 282700, 282800, 282900, 283200

### 1. Speed
<img alt="" src="https://github.com/anew226/Technician-Calculator/blob/main/images/SpeedCalc.jpg?raw=true">
Simple speed calculation: Distance over Time.
<br/><br/>

### 2. LVDT Adjustment
<img alt="LVDT Adjustment" src="https://github.com/anew226/Technician-Calculator/blob/main/images/LVDTCalc.jpg?raw=true">
Difference divided by Sum calculation. Used to check Linearity of LVDT (Linear Variable Differencial Transducer).
<br/><br/>

### 3. Damping Coefficient for PN: 31073
<img alt="Damping Coefficient for PN: 31073" src="https://github.com/anew226/Technician-Calculator/blob/main/images/DampingCoefficientCalc.jpg?raw=true">
Damping Coefficient is Force divided by Speed squared. Used to determine calibration of a restrictor orfice in unit PN: 31073.
<br/><br/>

### 4. Seal Friction for PN: 31077
<img alt="Seal Friction for PN: 31077" src="https://github.com/anew226/Technician-Calculator/blob/main/images/SealFrictionCalc.jpg?raw=true">
Force required to move unit's piston while in 'maintenance' mode. Relationship of psi to lbf based on a slave cylinder dimensions used to push unit's piston during test.
<br/><br/>

### 5. Special Null Ajustment for PNs: 282700, 282800, 282900, 283200
<img alt="Special Null Ajustment for PNs: 282700, 282800, 282900, 283200" src="https://github.com/anew226/Technician-Calculator/blob/main/images/SpecialNullAdjustment.jpg?raw=true">
Used to help technician interpret Null Adjustment Tables for unit PNs: 282700, 282800, 282900, 283200. 
<br/><br/>
Null adjustment includes measuring deviation from Null, then using that measured deviation to determine number of serrations to move an 'adjustemnt collar' to bring unit's Null adjusments within CMM limits.
<br/><br/>
Serration numbers on 'adjustement collar' are stored as index numbers + 1 in an array of values. Each value in array relates to unit's deviation from Null (based on CMM Null Adjustements Tables).
<br/><br/>

#### Example:
const tooth_282700 = [<br/>
0: 0.102,<br/>
1: 0.204,<br/>
2: -0.185,<br/>
...<br/>
51: -0.204,<br/>
52: -0.102,<br/>
53: 0.000 <br/>
];
<br/><br/>
In this example, serration 1 is at index 0. Seration 1's deviation from Null is 0.102 inches from rig neutral. The goal is to adjust collar to serration 53 (within &plusmn; 0.007 inches from rig neutral).
