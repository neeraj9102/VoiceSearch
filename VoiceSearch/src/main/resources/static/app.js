////let recognition;
////
////if ('webkitSpeechRecognition' in window) {
////    recognition = new webkitSpeechRecognition();
////    recognition.continuous = false;
////    recognition.lang = 'en-US';
////    recognition.interimResults = false;
////    recognition.onresult = function (event) {
////        const transcript = event.results[0][0].transcript;
////        document.getElementById('searchInput').value = transcript;
////    };
////    recognition.onerror = function (event) {
////        console.error("Speech recognition error:", event.error);
////        alert("Error with voice recognition. Please try again.");
////    };
////} else {
////    alert('Your browser does not support Speech Recognition');
////}
////
////function startVoiceRecognition() {
////    if (recognition) {
////        recognition.start();
////    }
////}
////
////function searchBackend() {
////    const query = document.getElementById('searchInput').value;
////
////    if (!query) {
////        alert('Please enter or speak something to search!');
////        return;
////    }
////
////    // Make an API call to the backend
////    fetch('http://localhost:8084/search?query=' + encodeURIComponent(query)) // Ensure the correct URL
////        .then(response => {
////            if (!response.ok) {
////                throw new Error('Network response was not ok');
////            }
////            return response.json();
////        })
////        .then(data => {
////            const resultDiv = document.getElementById('response');
////            resultDiv.innerHTML = "<h3>Search Results:</h3>";
////            if (data.length === 0) {
////                resultDiv.innerHTML += "<p>No results found.</p>";
////                return;
////            }
////            resultDiv.innerHTML += `
////                <table border="1" style="width: 100%; border-collapse: collapse;">
////                    <tr>
////                        <th>Title</th>
////                        <th>Link</th>
////                    </tr>
////            `;
////            data.forEach(item => {
////                resultDiv.innerHTML += `
////                    <tr>
////                        <td>${item.title}</td>
////                        <td><a href="${item.link}" target="_blank">View</a></td>
////                    </tr>
////                `;
////            });
////            resultDiv.innerHTML += `</table>`;
////        })
////        .catch(error => {
////            console.error("Error fetching search results:", error);
////            document.getElementById('response').innerHTML = "<p>An error occurred while fetching search results. Please try again later.</p>";
////        });
////}
//
//
//// Ensure the browser supports the Web Speech API
//let recognition;
//
//if ('webkitSpeechRecognition' in window) {
//    recognition = new webkitSpeechRecognition();
//    recognition.continuous = false;
//    recognition.lang = 'en-US';
//    recognition.interimResults = false;
//    recognition.onresult = function (event) {
//        const transcript = event.results[0][0].transcript;
//        document.getElementById('searchInput').value = transcript; // Set the text input to the recognized text
//    };
//    recognition.onerror = function (event) {
//        console.error("Speech recognition error", event.error);
//    };
//} else {
//    alert('Your browser does not support Speech Recognition');
//}
//
//function startVoiceRecognition() {
//    if (recognition) {
//        recognition.start(); // Start speech recognition when the button is clicked
//    }
//}
//
//function searchBackend() {
//    const query = document.getElementById('searchInput').value; // Get the value from the search input
//
//    if (!query) {
//        alert('Please enter or speak something to search!');
//        return;
//    }
//
//    // Make an API call to the backend with the query
//    fetch('/search?query=' + encodeURIComponent(query))
//        .then(response => response.json())
//        .then(data => {
//            const resultDiv = document.getElementById('response');
//            resultDiv.innerHTML = "<h3>Search Results:</h3>";
//            data.forEach(item => {
//                resultDiv.innerHTML += `<p>${item.title} - <a href="${item.link}" target="_blank">View</a></p>`;
//            });
//        })
//        .catch(error => {
//            console.error("Error fetching search results:", error);
//        });
//}
