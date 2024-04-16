package com.faculty.FacultyDashboard.entity;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GoogleData {

    @JsonProperty("iss")
    private String iss;

    @JsonProperty("sub")
    private String sub;

    @JsonProperty("hd")
    private String hd;

    @JsonProperty("email")
    private String email;

    @JsonProperty("email_verified")
    private String email_verified;

    @JsonProperty("name")
    private String name;

    @JsonProperty("picture")
    private String picture;

    public String getSub() {
        return sub;
    }

    public void setSub(String sub) {
        this.sub = sub;
    }

    public String getIss() {
        return iss;
    }

    public void setIss(String iss) {
        this.iss = iss;
    }

    public String getHd() {
        return hd;
    }

    public void setHd(String hd) {
        this.hd = hd;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEmail_verified() {
        return email_verified;
    }

    public void setEmail_verified(String email_verified) {
        this.email_verified = email_verified;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }
}
