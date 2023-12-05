########################################################################################

ENV = production
TRANSPORT = ssh
.PHONY = all deps build release

########################################################################################

all: deps build

deps:
	npm ci

build:
	npm build --if-present

release:
	ansible-playbook deploy.yml -i environments/$(ENV) \
		--extra-vars="env=$(ENV)" \
		-c $(TRANSPORT) 

########################################################################################
