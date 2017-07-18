/*
 * TelstraSMSMessagingAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */
package net.telstra.tdev.apipractice.slot2.models;

import java.util.ArrayList;
import java.util.List;
import java.util.TreeMap;

public enum StatusEnum {
    PEND, //TODO: Write general description for this element
    SENT, //TODO: Write general description for this element
    DELIVRD, //TODO: Write general description for this element
    EXPIRED, //TODO: Write general description for this element
    DELETED, //TODO: Write general description for this element
    UNDVBL, //TODO: Write general description for this element
    REJECTED, //TODO: Write general description for this element
    READ; //TODO: Write general description for this element

    private static TreeMap<String, StatusEnum> valueMap = new TreeMap<String, StatusEnum>();
    private String value;

    static {
        PEND.value = "PEND";
        SENT.value = "SENT";
        DELIVRD.value = "DELIVRD";
        EXPIRED.value = "EXPIRED";
        DELETED.value = "DELETED";
        UNDVBL.value = "UNDVBL";
        REJECTED.value = "REJECTED";
        READ.value = "READ";

        valueMap.put("PEND", PEND);
        valueMap.put("SENT", SENT);
        valueMap.put("DELIVRD", DELIVRD);
        valueMap.put("EXPIRED", EXPIRED);
        valueMap.put("DELETED", DELETED);
        valueMap.put("UNDVBL", UNDVBL);
        valueMap.put("REJECTED", REJECTED);
        valueMap.put("READ", READ);
    }

    /**
     * Returns the enum member associated with the given string value
     * @return The enum member against the given string value */
    @com.fasterxml.jackson.annotation.JsonCreator
    public static StatusEnum fromString(String toConvert) {
        return valueMap.get(toConvert);
    }

    /**
     * Returns the string value associated with the enum member
     * @return The string value against enum member */
    @com.fasterxml.jackson.annotation.JsonValue
    public String value() {
        return value;
    }
        
    /**
     * Get string representation of this enum
     */
    @Override
    public String toString() {
        return value.toString();
    }

    /**
     * Convert list of StatusEnum values to list of string values
     * @param toConvert The list of StatusEnum values to convert
     * @return List of representative string values */
    public static List<String> toValue(List<StatusEnum> toConvert) {
        if(toConvert == null)
            return null;
        List<String> convertedValues = new ArrayList<String>();
        for (StatusEnum enumValue : toConvert) {
            convertedValues.add(enumValue.value);
        }
        return convertedValues;
    }
} 