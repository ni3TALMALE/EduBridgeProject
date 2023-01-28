package com.EduBridge;



import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Entity;


import jakarta.persistence.Id;

@JsonIgnoreProperties({"hibernateLazyInitializer"})
@Entity
public class ticketModal {
@Id
int id;

String destination;
String checkin;
String checkout;
String rooms;
String adults;
String children;
int userid;
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}


public int getUserid() {
	return userid;
}
public void setUserid(int userid) {
	this.userid = userid;
}
public String getDestination() {
	return destination;
}
public void setDestination(String destination) {
	this.destination = destination;
}
public String getCheckin() {
	return checkin;
}
public void setCheckin(String checkin) {
	this.checkin = checkin;
}
public String getCheckout() {
	return checkout;
}
public void setCheckout(String checkout) {
	this.checkout = checkout;
}
public String getRooms() {
	return rooms;
}
public void setRooms(String rooms) {
	this.rooms = rooms;
}
public String getAdults() {
	return adults;
}
public void setAdults(String adults) {
	this.adults = adults;
}
public String getChildren() {
	return children;
}
public void setChildren(String children) {
	this.children = children;
}

public ticketModal(int id,int userid, String destination, String checkin, String checkout, String rooms, String adults,
		String children) {
	super();
	this.id = id;
	this.userid = userid;
	this.destination = destination;
	this.checkin = checkin;
	this.checkout = checkout;
	this.rooms = rooms;
	this.adults = adults;
	this.children = children;
}
public ticketModal() {
	
}
}
