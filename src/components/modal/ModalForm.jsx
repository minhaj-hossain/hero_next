"use client";

import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField, Select, ListBox, Description } from "@heroui/react";

export function ModalForm({ createATask }) {
    return (
        <Modal>
            <Button variant="secondary">Open Contact Form</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <Envelope className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Contact Us</Modal.Heading>
                            <p className="mt-1.5 text-sm leading-5 text-muted">
                                Fill out the form below and we will get back to you. The modal adapts automatically
                                when the keyboard appears on mobile.
                            </p>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form action={createATask} className="flex flex-col gap-4">
                                    <TextField className="w-full" type="text">
                                        <Label>Title</Label>
                                        <Input name="title" placeholder="Enter your task title" />
                                    </TextField>
                                    <TextField className="w-full" type="text">
                                        <Label>description</Label>
                                        <Input name="description" placeholder="Enter  description" />
                                    </TextField>
                                    <TextField className="w-full" name="assigned_to" type="tel">
                                        <Label>Assigned to</Label>
                                        <Input placeholder="Assignee" />
                                    </TextField>
                                    <Select name='priority' className="w-[256px]" placeholder="Select one">
                                        <Label>Priority</Label>
                                        <Select.Trigger>
                                            <Select.Value />
                                            <Select.Indicator />
                                        </Select.Trigger>
                                        <Select.Popover>
                                            <ListBox>
                                                <ListBox.Item id="medium" textValue="Medium">
                                                    Medium
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item id="high" textValue="high">
                                                    High
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item id="urgent" textValue="Urgent">
                                                    Urgent
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>

                                            </ListBox>
                                        </Select.Popover>
                                        <Description>Select your priority</Description>
                                    </Select>

                                    <Modal.Footer>
                                        <Button variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type="submit" >Send Message</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}