# Integration Test Application

This is a web application that is intended for Clover internal use.  It is both a driver and reporting mechanism for our integration tests.  These tests require a connection to a Clover device and exercise the SDK as well as Cloud and Network Pay Display.

# Requirements

This application relies on JSON test definitions that are pulled from an internal/private Clover project called Pidgin (pidgin-test).allows for manual execution of our automated test suite.  It assumes the test-definitions-api REST service is running on localhost:3001.

Run:
```
gradlew build startTestApp
```
and navigate to <a href="http://localhost:3000">localhost:3000<a>