package com.EduBridge;


public class BookingResponse {
	private int id;
	private String destination;
	private String checkin;
	private String checkout;
	private String rooms;
	private String adults;
	private String children;
	public BookingResponse(int id, String destination, String checkin, String checkout, String rooms, String adults,
			String children) {
		super();
		this.id = id;
		this.destination = destination;
		this.checkin = checkin;
		this.checkout = checkout;
		this.rooms = rooms;
		this.adults = adults;
		this.children = children;
	}
	
}
