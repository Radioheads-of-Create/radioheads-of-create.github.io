---
title: Registries
description: Registries provided by Airwaves
---

# Registries

## Boards
These are registries for all circuit boards.

### Board
to be done

### Part
to be done


### Stage
to be done


### Rule
to be done


### Source
to be done


### Step
to be done


### Step Mode
to be done


## Radio Band
Instead of using a strict AM/FM radio band, Airwaves allows custom radio bands to be defined.

```java
public static final RadioBandEntry MAGIC = MY_REGISTRATE.radioBand("magic", () -> 
    new RadioBand(
        20.0 // Minimal frequency supported
        500.0 // Maximum frequency supported
        HertzUnit.kHz // The hertz unit that this band uses
        MyModulations.MAGICAL // The modulation for this radio band
    )
).register()
```

## Modulation
Modulations have a range factor for radio. This is used for radio bands

This example sets a modulation to a range factor of `1.5`
```java
public static final AirwaveModulations MAGICAL = MY_REGISTRATE.modulation("magical", () -> 
    new Modulation(1.5)
).register()
```

## Cable Type
Cables are used to transmit signals over wire to antennas and more.

First, you need to register an item that is an instance of `CableItem`

```java
public static final ItemEntry<CableItem> EPIC_CABLE_SPOOL = MY_REGISTRATE.item("epic_cable_spool", p -> 
    new CableItem(p, MyCableTypes.EPIC)
).register()
```

Then to register a custom cable type.
Over each block, some dB is lost, and that depends on the cable type.
This example tells Airwaves: per each block, `0.03945 dB` is lost
```java
public static final CableTypeEntry EPIC = MY_REGISTRATE.cableType("epic", () -> 
    new CableType(MyItems.EPIC_CABLE_SPOOL, 0.03945)
).register()    
```
