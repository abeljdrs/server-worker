self.addEventListener('push', function(event) {
    if (event.data) {
      console.log('This push event has data: ', event.data.text());
    } else {
      console.log('This push event has no data.');
    }
    webNotification.showNotification('Alphadatamanager Alert', {
        body: 'Matricula '+newAlert.detail+ 
                'Nivel P'+level,
        icon: 'imgs/Favicon_ADM_07.png',
        silent: 'false',
        vibrate: vibrate,
        onClick: function onNotificationClicked() {
                $scope.openAlert(newAlert.id);
        },
        autoClose: 10000 //auto close the notification after 4 seconds (you can manually close it via hide function)
        }, function onShow(error, hide) {
            if (error) {
                window.alert('Unable to show notification: ' + error.message);
            } else {
                console.log('Notification Shown.');
            
                setTimeout(function hideNotification() {
                console.log('Hiding notification....');
                hide(); //manually close the notification (you can skip this if you use the autoClose option)
                }, 10000);
            }
        }
    );
});

  /**
// Returns string
event.data.text()

// Parses data as JSON string and returns an Object
event.data.json()

// Returns blob of data
event.data.blob()

// Returns an arrayBuffer
event.data.arrayBuffer()
   */