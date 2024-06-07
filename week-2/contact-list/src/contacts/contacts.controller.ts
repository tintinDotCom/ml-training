import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  // @Get()
  // async findAll() {
  //   return await this.contactsService.findAll();
  // }

  @Post()
  async create(@Body() createContactDto: CreateContactDto) {
    return await this.contactsService.create(createContactDto);
  }

  @Get(':id')
  async findContactById(@Param('id') id: string) {
    return await this.contactsService.findContactById(+id);
  }

  // @Get(':contactName')
  // async findByName(@Query('contactName') contactName?: string) {
  //   return await this.contactsService.findByName(contactName);
  // }

  @Get()
  async findByName(@Query() query?: CreateContactDto) {
    return await this.contactsService.findByName(query);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateContactDto: UpdateContactDto,
  ) {
    return await this.contactsService.update(+id, updateContactDto);
  }
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.contactsService.remove(+id);
  }
}
