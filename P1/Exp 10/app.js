<?php 
 
$name = $_GET['name'] ?? ""; 
 
// NEW DATASET (different from original) 
$students = ["Sanika", "Shreyas", "Rahul", "Priya", "Amit", "Neha", "Kunal", "Riya"]; 
 
$hint = ""; 
 
if ($name !== "") { 
    $name = strtolower($name); 
 
    foreach ($students as $student) { 
        if (str_starts_with(strtolower($student), $name)) { 
            if ($hint === "") { 
                $hint = $student; 
            } else { 
                $hint .= ", " . $student; 
            } 
        } 
    } 
} 
 
echo $hint === "" ? "No match found" : $hint; 
 
?> 
