<?php

use Illuminate\Support\Facades\Broadcast;

//Incoming Notification Channel Where the Specific User Will be Notified
/*
Broadcast::channel('notify.{user_id}', function() {
    return true;
});
*/
//Incoming Appointment Request Channel Where the Prefect Will be Notified
Broadcast::channel('complaint.{user_id}.send', function () {
    return true;
});
Broadcast::channel('complaint.{user_id}.confirm', function () {
    return true;
});
Broadcast::channel('notify.{user_id}', function () {
    return true;
});
Broadcast::channel('call_in.{student_id}', function($student_id) {
    return $student_id == auth()->user()->user_id;
});
Broadcast::channel('appointment.{user_id}.request', function () {
    return true;
});

//Incoming Appointment Confirmation Channel Where the Requested User Will be Notified
/*
Broadcast::channel('appointment.{user_id}.confirm', function() {
    return true;
});
*/
//Incoming Lost Item Request Channel Where the Prefect Will be Notified
/*
Broadcast::channel('lost_item.{user_id}.notify', function() {
    return true;
});
*/
